import React from "react";
import Select from "react-select";

interface SearchSelectProps {
  options: { label: string; value: string }[];
  onChange: (value: any) => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
}

export const SearchSelect = ({
  options,
  onChange,
  isDisabled = false,
  isLoading = false,
  isClearable = true,
  isSearchable = true,
}: SearchSelectProps) => {
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      defaultValue={options[0]}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={isClearable}
      isSearchable={isSearchable}
      name="color"
      onChange={onChange}
      options={options}
    />
  );
};
