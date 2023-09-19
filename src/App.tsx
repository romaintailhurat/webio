//import './App.css'

import shuffle from "lodash.shuffle";
import orderBy from "lodash.orderby"
import { useState } from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// DATA

type Bowiette = {
  firstname: string;
  lastname: string;
  emo: string;
}

const bowiettes: Bowiette[] = [
  { firstname: "Anne", lastname: "Husseini", emo: "😇" },
  { firstname: "Dylan", lastname: "Decrulle", emo: "🤠" },
  { firstname: "Laurent", lastname: "Caouissin", emo: "😜" },
  { firstname: "François", lastname: "Bulot", emo: "🐚" },
  { firstname: "Nicolas", lastname: "Senave", emo: "😉" },
  { firstname: "Quentin", lastname: "Ruhier", emo: "😊" },
  { firstname: "Romain", lastname: "Tailhurat", emo: "😅" },
  { firstname: "Jonathan", lastname: "???", emo: "😎" }
];

// APP

type BowieListProps = {
  list: Bowiette[]
};

function BowieList({ list }: BowieListProps) {  
  return (
      <List>
        {list.map(b => <ListItem><ListItemText primary={`${b.firstname} ${b.emo}`} /></ListItem>)}        
      </List>
  )
}

export default function App() {
  const [displayedBowiettes, setDisplayedBowiettes] = useState(bowiettes);

  // TODO state ← JSON.stringify displayedB + base64 (https://developer.mozilla.org/en-US/docs/Web/API/btoa)

  function handleRandom() {
    setDisplayedBowiettes(shuffle(bowiettes));
  }

  function handleFirstNameAsc() {
    setDisplayedBowiettes(orderBy(bowiettes, "firstname"));
  }

  function handleFirstNameDesc() {
    setDisplayedBowiettes(orderBy(bowiettes, "firstname", "desc"));
  }

  function handleEmoji() {
    setDisplayedBowiettes(orderBy(bowiettes, "emo"));
  }

  return (
    <main>
      <Container>
        <Button variant="contained" onClick={handleRandom}>Random</Button>
        <Button variant="contained" onClick={handleFirstNameAsc}>By Firstname ↓</Button>
        <Button variant="contained" onClick={handleFirstNameDesc}>By Firstname ↑</Button>
        <Button variant="contained" onClick={handleEmoji}>By Emoji</Button>      
        <BowieList list={displayedBowiettes} />
      </Container>      
    </main>
  )
}