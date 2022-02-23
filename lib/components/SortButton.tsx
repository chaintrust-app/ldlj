import * as React from "react"
import { useState } from "react"
import styled from "styled-components/macro"
import {Option, OptionList, Select} from "./Select";

export const SortButton = <T extends string>({
  sortMethod,
  options,
  defaultOption,
  shadowed = false,
  dataCy,
}: {
  sortMethod: (option: T) => void
  options: OptionList<T>
  defaultOption: Option<T>
  shadowed?: boolean
  dataCy?: string
}) => {
  const [selection, setSelection] = useState<Option<T>>(defaultOption)
  return (
    <DropShadowContainer id={"sortButton"}>
      <Select
        selectType={"sort"}
        options={options}
        value={selection}
        defaultValue={options.find(
          (option) => option.value === defaultOption.value
        )}
        // eslint-disable-next-line
        onChangeCallback={(e: any) => {
          sortMethod(e.value)
          setSelection(e)
        }}
        shadowed={shadowed}
        dataCy={dataCy}
      />
    </DropShadowContainer>
  )
}

const DropShadowContainer = styled.div`
  filter: drop-shadow(0px 4px 14px rgba(2, 76, 248, 0.1));

  border-radius: 1.25rem;
  z-index: 1;
`
