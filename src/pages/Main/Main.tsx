import React, { useState, useEffect, ChangeEvent, FormEvent, useContext } from 'react';

import GlobalStyle from '../../GlobalStyle'
import { ThemeContext } from 'styled-components'

import Note, { INotes } from '../../components/Notes/Notes'
import ModalComponent from '../../components/Modal/Modal'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Switch from 'react-switch'

import axios from 'axios'

import { GrNewWindow } from 'react-icons/gr'

import {
  MainContainer,
  Header,
  HandleNotesContainer,
  NewNoteContainer,
  Input,
  ButtonAdd,
  NotesContainer,
  MainTitle
}
  from './styles'

interface Props {
  toggleTheme(): void
}


const Main: React.FC<Props> = ({ toggleTheme }) => {
  
  const {title} = useContext(ThemeContext)


  const [notes, setNotes] = useState<INotes[]>([])
  const [requestCount, setRequestCount] = useState(0)
  const [task, setTask] = useState('')
  const [modal, setModal] = useState(false)
  const [switcher, setSwitcher] = useState(false)


  //GET DATA FROM JSON SERVER

  useEffect(() => {

    const getData = async () => {
      await axios.get(`http://localhost:3333/notes`)
        .then(response => setNotes(response.data))
    }

    getData()

  }, [requestCount])


  //CREATE NOTE

  const newNote = async (e: FormEvent) => {

    e.preventDefault()

    document.querySelector('form')?.reset()

    if (task === '') {
      toast.warn('Please, type a note to continue.')
    } else {

      const id = Number((Math.random() * 100 * Math.random() * 5).toFixed(0))

      await axios.post('http://localhost:3333/notes', {
        "id": id,
        "task": task,
      }).then(response => console.log(response))

      toast.success('You are added a note.')

      setRequestCount(requestCount + 1)
      setTask('')

    }
  }


  //EDIT TASK

  const editTask = async (id: number) => {

    await axios.put(`http://localhost:3333/notes/${id}`, {
      "id": id,
      "task": task
    })

    toast.success('Your note are altered with success.')
    setModal(false)
    setRequestCount(requestCount + 1)

  }


  //DROP TASK 

  const dropTask = async (id: number) => {

    await axios.delete(`http://localhost:3333/notes/${id}`)
      .then(response => { console.log(response.status) })

    setRequestCount(requestCount + 1)

    toast.success('You are deleted a note.')

  }


  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark' ? true : false}
            checkedIcon={false}
            uncheckedIcon={false}
            height={15}
            width={40}
            handleDiameter={20}
          />
          <MainTitle>
            <GrNewWindow /> My Notes
        </MainTitle>
        </Header>
        <ToastContainer />
        {notes.map(note => (
          <ModalComponent
            currentTask={task}
            handleTask={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
            modalStatus={modal}
            putTask={() => editTask(note.id)}
            handleModal={() => setModal(!modal)}
          />
        ))}
        <HandleNotesContainer>
          <NewNoteContainer>
            <form onSubmit={newNote}>
              <Input
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
              />
              <ButtonAdd type='submit'>
                <GrNewWindow size={24} />
              </ButtonAdd>
            </form>
          </NewNoteContainer>
          <NotesContainer>
            {notes?.map(note => (
              <Note
                id={note.id}
                task={note.task}
                dropTask={() => dropTask(note.id)}
                editTask={() => editTask(note.id)}
                enableModal={() => setModal(true)}
              />
            ))}
          </NotesContainer>
        </HandleNotesContainer>
      </MainContainer>
    </>
  );
}

export default Main;