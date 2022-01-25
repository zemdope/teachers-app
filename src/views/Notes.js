import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { addNote, useGetNotesQuery, useAddNoteMutation } from 'store';
import {
  FormWrapper,
  NotesWrapper,
  StyledFormField,
  Wrapper
} from './Notes.style';
import Note from '../components/molecules/Note/Note';
import { useForm } from 'react-hook-form';

const Notes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const { data, isLoading } = useGetNotesQuery();
  const [addNote] = useAddNoteMutation();

  const handleAddNote = ({ title, content }) => {
    addNote({ title, content });
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit(handleAddNote)}>
        <StyledFormField
          {...register('title', { required: true })}
          label='Title'
          name='title'
          id='title'
        />
        <StyledFormField
          {...register('content', { required: true })}
          isTextarea
          label='Content'
          name='content'
          id='content'
        />
        {errors.title && <span>Title is required</span>}
        {errors.content && <span>Content is required</span>}
        <Button type='submit'>Add</Button>
      </FormWrapper>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ title, content, id }) => (
              <Note id={id} key={id} title={title} content={content} />
            ))
          ) : (
            <p>Create your first note</p>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

export default Notes;
