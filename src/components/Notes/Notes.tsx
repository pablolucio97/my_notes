import React, { ChangeEvent } from 'react';

import { Note, CloseButton, EditButton } from './styles'

import {GrFormClose} from 'react-icons/gr'
import {MdEdit} from 'react-icons/md'


export interface INotes {
  id: number,
  task: string,
  editTask?: () => void
  dropTask?: () => void
  enableDrag?: () => void
  enableModal: () => void
}

const Notes: React.FC<INotes> = ({
  id,
  task,
  editTask,
  dropTask,
  enableDrag,
  enableModal

}) => {
  return (
    <>
      <Note key={id} draggable onDrag={enableDrag}>
        {task}
        <CloseButton onClick={dropTask}>
          <GrFormClose  size={14} color='#fff'/>
        </CloseButton>
        <EditButton onClick={enableModal}>
          <MdEdit  size={14} color='#222'/>
        </EditButton>
      </Note>
    </>
  );
}

export default Notes;