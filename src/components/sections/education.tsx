import raw from "../../assets/cv/education.json";
import {
	Item,
	ItemDates,
	ItemDescription,
	ItemDetail,
	ItemTitle,
	Section,
	SectionContent,
	SectionFlexContainer,
	SectionHeader,
	SectionTitle,
	Separator
} from "./common-styles.tsx";

type EducationItem = {
	degree: string;
	university: string;
	start_year: string;
	end_year: string;
	description: string;
};

type EducationInfo = EducationItem[]

const Education = () => {
	const data = raw as EducationInfo;

	return (
		<Section id={"education"}>
			<SectionHeader>
				<SectionTitle>
					Education
				</SectionTitle>
				<Separator />
			</SectionHeader>

			<SectionContent>
				{data.map((item, index) => (
					<>
						{index > 0 ? <Separator /> : null}

						<Item key={index}>
							<SectionFlexContainer>
								<ItemTitle>{item.university}</ItemTitle>
								<ItemDates> {item.start_year} – {item.end_year}</ItemDates>
							</SectionFlexContainer>
							<ItemDetail> {item.degree}</ItemDetail>
							<ItemDescription>{item.description}</ItemDescription>
						</Item>
					</>
				))}
			</SectionContent>
		</Section>
	)
}

export default Education;