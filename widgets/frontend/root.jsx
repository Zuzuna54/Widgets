import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

const tabInfo = [{ name: "One", content: "First Tab" }, { name: "Two", content: "Second Tab" }, { name: "Three", content: "Third Tab"}];


const Root = () => {
  return (
  <>
    <Clock/>
    <Tabs tabInfo = {tabInfo}/>
  </>
  );
}

export default Root;