"use client"

import { getMunicipalities } from "@/app/lib/data"
import {
  Checkbox,
  CheckboxGroup,
  NativeSelect,
} from "@digdir/designsystemet-react"
import { useState } from "react"

export default function SearchFilter() {
  const [county, setCounty] = useState<string>()

  return (
    <div>
      <h1>Filtrer Søk</h1>
      <div>
        <NativeSelect
          label='Velg Fylke'
          size='md'
          onChange={(e) => setCounty(e.target.value)}
        >
          <option value='blank'>Velg …</option>
          <option value='agder'>Agder</option>
          <option value='akershus'>Akershus</option>
          <option value='buskerud'>Buskerud</option>
          <option value='finnmark'>Finnmark</option>
          <option value='innlandet'>Innlandet</option>
          <option value='møreogromsdal'>Møre og Romsdal</option>
          <option value='nordland'>Nordland</option>
          <option value='oslo'>Oslo</option>
          <option value='rogaland'>Rogaland</option>
          <option value='svalbard'>Svalbard</option>
          <option value='telemark'>Telemark</option>
          <option value='troms'>Troms</option>
          <option value='trøndelag'>Trøndelag</option>
          <option value='vestfold'>Vestfold</option>
          <option value='vestland'>Vestland</option>
          <option value='østfold'>Østfold</option>
        </NativeSelect>
      </div>
      <div>
        <Checkbox.Group description='Velg Kommune' error='' legend='' size='md'>
          {getMunicipalities(county).map((municipality) => (
            <Checkbox key={municipality} value={municipality}>
              {municipality}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </div>
      <div>
        <Checkbox.Group
          description='Velg erfaringsnivå'
          error=''
          legend=''
          size='md'
        >
          <Checkbox value='nybegynner'>Nybegynner</Checkbox>
          <Checkbox value='amatør'>Amatør</Checkbox>
          <Checkbox value='profesjonell'>Profesjonell</Checkbox>
        </Checkbox.Group>
      </div>
      <div>
        {" "}
        <Checkbox.Group
          description='Velg alderstrinn'
          error=''
          legend=''
          size='md'
        >
          <Checkbox value='barn'>Barn</Checkbox>
          <Checkbox value='ungdom'>Ungdom</Checkbox>
          <Checkbox value='voksen'>Voksen</Checkbox>
          <Checkbox value='senior'>Senior</Checkbox>
        </Checkbox.Group>
      </div>
    </div>
  )
}
