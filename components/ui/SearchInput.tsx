import { MapPin, Search } from "lucide-react";
import { useState } from "react";

interface SearchInputProps<T> {
  icon: typeof Search | typeof MapPin;
  placeholder: string;
  hasBorder?: boolean;
  value: string;
  onChange?: (text: string) => void;
  suggestions?: T[];
  getLabel?: (item: T) => string; // how to show each suggestion
  getQuery?: (item: T) => string; // what to set as input value on selection
}

export default function SearchInput<T>({
  icon: Icon,
  placeholder,
  hasBorder = false,
  value,
  onChange,
  suggestions = [],
  getLabel = (item) => String(item),
  getQuery = (item) => String(item),
}: SearchInputProps<T>) {
  const [isFocused, setIsFocused] = useState(false);

  const filteredSuggestions = suggestions.filter((item) =>
    getLabel(item)?.toLowerCase()?.includes(value.toLowerCase())
  );
  // console.log('filteredSuggestions', suggestions, filteredSuggestions);

  return (
    <div
      className={`relative flex items-center flex-1 px-4 w-full py-3 transition-colors ${
        hasBorder ? "border-b md:border-b-0 md:border-r border-slate-200" : ""
      }`}
    >
      <Icon className="text-slate-400 mr-3 shrink-0" size={20} />
      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        type="text"
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 100)}
        className="w-full outline-none text-slate-700 bg-transparent placeholder:text-slate-400 focus:placeholder:text-slate-300 transition-colors"
      />
      {isFocused && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white border border-slate-200 rounded-b-xl shadow-lg max-h-60 overflow-y-auto z-10">
          <ul className="py-2">
            {filteredSuggestions.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-slate-100 cursor-pointer"
                onMouseDown={() => onChange?.(getQuery(item))}
              >
                {getLabel(item)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
