"use client"

import type { ClubCard } from "@/app/lib/definitions"
import { Card, Heading, Paragraph } from "@digdir/designsystemet-react"
import Image from "next/image"

export function ClubCardComponent({
  image,
  clubName,
  description,
  clubLink,
}: ClubCard) {
  return (
    <div>
      <Card asChild color='neutral' isLink style={{ width: "320px" }}>
        <a href={clubLink} rel='noopener noreferrer' target='_blank'>
          <Card.Media>
            <Image
              alt='katt 1'
              src={`/images/${image}`}
              width={320}
              height={180}
              layout='responsive'
            />
          </Card.Media>
          <Card.Header>
            <Heading size='sm'>{clubName}</Heading>
          </Card.Header>
          <Card.Content>{description}</Card.Content>
          <Card.Footer>
            <Paragraph size='sm'>Footer text</Paragraph>
          </Card.Footer>
        </a>
      </Card>
    </div>
  )
}
