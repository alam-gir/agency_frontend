import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectionBoxProps {
  title?: string;
}

const SelectionBox: React.FC<SelectionBoxProps> = ({title}) =>  {
  return (
    <Select>
      <SelectTrigger className="w-[180px text-primary">
        <SelectValue placeholder={`Select ${title ? title : ""}`} />
      </SelectTrigger>
      <SelectContent className="text-white">
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}


export default SelectionBox
