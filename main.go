package main

import (
	// "net/http"

	"github.com/gomarkdown/markdown"
	"github.com/gomarkdown/markdown/html"
	"github.com/gomarkdown/markdown/parser"

	"bufio"
	"fmt"
	"html/template"
	"io"
	"log"
	"net/http"
	"os"
)


// Serve the static assets like CSS, JS, and favicon
func serveStaticFiles() {
	// Serve files from the "./static" directory at the root "/"
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/static/", http.StripPrefix("/static", fs))
}

func handler(w http.ResponseWriter, r *http.Request) {
	// Parse the template file (index.html)
	tmpl, err := template.ParseFiles("index.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Render the template and inject the mainContent variable into the template
	err = tmpl.Execute(w, template.HTML(getContentFromMarkdown()))
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func getContentFromMarkdown() string {
	// open markdown file
	file, err := os.Open("./md/cv.md")
	if err != nil {
		fmt.Println(err)
		return ""
	}
	defer file.Close()

	// Get the file size
	stat, err := file.Stat()
	if err != nil {
		fmt.Println(err)
		return ""
	}

	// Read the file into a byte slice
	bytes := make([]byte, stat.Size())
	_, err = bufio.NewReader(file).Read(bytes)
	if err != nil && err != io.EOF {
		fmt.Println(err)
		return ""
	}

	return string(mdToHTML(bytes))

}
func main() {
	// Set up the static file server
	serveStaticFiles()

	// Handle the root route
	http.HandleFunc("/", handler)

	// Start the server
	log.Println("Server started on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

// func main() {

// 	file, err := os.Open("./md/cv.md")
// 	if err != nil {
// 		fmt.Println(err)
// 		return
// 	}
// 	defer file.Close()

// 	// Get the file size
// 	stat, err := file.Stat()
// 	if err != nil {
// 		fmt.Println(err)
// 		return
// 	}

// 	// Read the file into a byte slice
// 	bytes := make([]byte, stat.Size())
// 	_, err = bufio.NewReader(file).Read(bytes)
// 	if err != nil && err != io.EOF {
// 		fmt.Println(err)
// 		return
// 	}

// 	htmlBytesToInject := mdToHTML(bytes)

// 	err = os.WriteFile("./static/index.html", htmlBytes, 0644)
// 	if err != nil {
// 		fmt.Println("error writing html file to disk")
// 	}

// 	http.Handle("/", http.FileServer(http.Dir("./static")))
// 	http.ListenAndServe(":3000", nil)
// }

func mdToHTML(md []byte) []byte {
	// create markdown parser with extensions
	extensions := parser.CommonExtensions | parser.AutoHeadingIDs | parser.NoEmptyLineBeforeBlock
	p := parser.NewWithExtensions(extensions)
	doc := p.Parse(md)

	// create HTML renderer with extensions
	htmlFlags := html.CommonFlags | html.HrefTargetBlank
	opts := html.RendererOptions{Flags: htmlFlags}
	renderer := html.NewRenderer(opts)

	return markdown.Render(doc, renderer)
}
