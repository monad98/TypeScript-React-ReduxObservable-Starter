import * as React from 'react';

interface Props {
  // value: string;
  defaultValue: string;
  onChange: (query: string) => void;
}

export default function UserSearchInput({ defaultValue, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Search for a GH user"
      defaultValue={defaultValue}
      onChange={(evt) => onChange(evt.target.value)}
    />
  );
}
