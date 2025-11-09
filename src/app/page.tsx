import { Header } from "@/components/header"
import { SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { projects, work } from "@/lib/constants"

const projectItems = projects.slice(0, 2).map((project) => ({ title: project.title, role: project.role, description: project.description, href: project.href }))

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList title="work" items={work} />
      <BlogSection />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
    </>
  )
}
