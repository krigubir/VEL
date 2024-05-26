import { Button } from "@digdir/designsystemet-react"
import Link from "next/link"
import styles from "@/app/ui/header/header.module.css"

export default function Header() {
  return (
    <div>
      <Link href='/'>
        <h1>VEL...</h1>
      </Link>
      <Link href='/'>Hjem</Link>
      <Button>Logg inn</Button>
    </div>
  )
}
