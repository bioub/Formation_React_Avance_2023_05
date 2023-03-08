import { useState } from 'react';
import Select from './Select';

export default function About() {
  const [prenoms, setPrenoms] = useState(['Jean', 'Paul', 'Eric']);
  const [selectedPrenom, setSelectedPrenom] = useState('Jean');

  return (
    <div className="About">
      <p>Vous avez sélectionné : {selectedPrenom}</p>
      <Select items={prenoms} selected={selectedPrenom} onSelected={setSelectedPrenom} />
    </div>
  );
}
