import raw from "../../assets/cv/experience.json";
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

type Job = {
	id: number;
	job_title: string;
	company: string;
	start_year: string;
	end_year: string;
	description: string;
};

type ExperienceInfo = Job[];

const Education = () => {

	const data = raw as ExperienceInfo;

	return (
		<Section id={"experience"}>
			<SectionHeader>
				<SectionTitle>
					Experience
				</SectionTitle>
				<Separator></Separator>
			</SectionHeader>

			<SectionContent>
				{data.map((job, index) => (
					<>
					{index > 0 ? <Separator /> : null}

					<Item key={job.id}>
						<SectionFlexContainer>
							<ItemTitle>{job.company}</ItemTitle>
							<ItemDates> {job.start_year} – {job.end_year}</ItemDates>
						</SectionFlexContainer>
						<ItemDetail> {job.job_title}</ItemDetail>
						<ItemDescription>{job.description}</ItemDescription>
					</Item>
					</>
				))}
			</SectionContent>
		</Section>
	)
}

export default Education;