import { utils, writeFileXLSX } from 'xlsx';

export default function ExportExcel() {
  const exportFile = () => {
  // const exportFile = async () => {
    // const { utils, writeFileXLSX } = await import('xlsx');
    const ws = utils.json_to_sheet([
      { Name: 'Bill Clinton', Index: 42 },
      { Name: 'GeorgeW Bush', Index: 43 },
      { Name: 'Barack Obama', Index: 44 },
      { Name: 'Donald Trump', Index: 45 },
      { Name: 'Joseph Biden', Index: 46 },
    ]);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Data');
    writeFileXLSX(wb, 'SheetJSReactAoO.xlsx');
  };

  return (
    <div className="ExportExcel">
      <h2>Page export Excel</h2>
      <button onClick={exportFile}>Export</button>
    </div>
  );
}
