import SearchFilter from "@/app/ui/home/searchFilter"
import SearchInput from "./ui/home/searchInput"
import { getExampleClubData } from "./lib/data"
import { ClubCardComponent } from "@/app/ui/home/ClubCardComponent"

export default function Home() {
  return (
    <div>
      <SearchFilter />
      <SearchInput />
      {getExampleClubData().map((club, index) => (
        <ClubCardComponent
          key={index}
          image={club.image}
          title={club.name}
          clubName={club.name}
          description={club.description}
          clubLink={`/klubb/${club.name}`}
        />
      ))}
    </div>
  )
}
