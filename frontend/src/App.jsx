import React from 'react';
import { useRow } from './assets/hooks/useRow';
import { useToggle } from './assets/hooks/useToggle';
import { CardContainer } from './components/cardInfo/CardContainer';
import { DonutChart } from './components/donutChart/DonutChart';
import { Form } from './components/form/Form';
import { SearchBar } from './components/searchBar/SearchBar';
import { TableElement } from './components/table/TableElement';
import './generalStyles.css';

export const App = () => {

  const { isVisible: isFormVisible, handleToggle } =  useToggle('form');

  const {
    rows,
    keysMap,
    handleNewRow,
    handleChangeRow,
    typeOptions,
    listId,
    summaryValues
  } = useRow('items');

  return(
    <>
    <main>
      <section className = "formDonut-section">
        <Form
          claName = {isFormVisible}
          rows = {listId}
          keysMap = {keysMap}
          typeOptions = {typeOptions}
          handleNewRow = {handleNewRow}
          handleChangeRow = {handleChangeRow}
        />
        <DonutChart typeOptions = {typeOptions}/>
      </section>
      <section>
        <SearchBar
          handleFormToggle = {handleToggle}
        />
        <TableElement
          rows ={rows}
          keysMap = {keysMap}
        />
      </section>
        <CardContainer summaryValues = {summaryValues}/>
    </main>
    </>
  );
}