

interface MultiSelectProps {
  label: string
  options: { id: string; name: string }[]
  selected: { id: string; name: string }[]
  onChange: (selected: { id: string; name: string }[]) => void
}

export default function MultiSelect({ label, options, selected, onChange }: MultiSelectProps) {
  const toggleOption = (option: { id: string; name: string }) => {
    const exists = selected.find(o => o.id === option.id)
    if (exists) {
      onChange(selected.filter(o => o.id !== option.id))
    } else {
      onChange([...selected, option])
    }
  }

  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option.id}
            type="button"
            onClick={() => toggleOption(option)}
            className={`px-3 py-1 rounded-full border ${
              selected.find(o => o.id === option.id)
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700'
            } hover:opacity-75`}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  )
}
