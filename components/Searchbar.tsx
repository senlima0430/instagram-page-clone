import React from 'react'
import { Observable } from 'rxjs'
import { useEventCallback } from 'rxjs-hooks'
import { tap, map, filter, debounceTime } from 'rxjs/operators'
import {
  Input,
  Spinner,
  InputGroup,
  FormLabel,
  FormControl,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react'

type PropsType = {
  loading: boolean
  submitFunc: (data: string) => void
}

export function Searchbar({ loading, submitFunc }: PropsType) {
  const [changeCallback] = useEventCallback(
    (event$: Observable<React.SyntheticEvent<HTMLInputElement>>) =>
      event$.pipe(
        map(event => event.currentTarget.value),
        filter(val => val.length >= 3),
        debounceTime(750),
        tap(keyword => submitFunc(keyword))
      ),
    ''
  )

  return (
    <FormControl>
      <FormLabel htmlFor="keyword">Keyword</FormLabel>
      <InputGroup size="sm">
        <Input
          id="keyword"
          defaultValue=""
          onChange={changeCallback}
          aria-label="search picture"
          placeholder="Input some words..."
        />
        {loading && (
          <InputRightElement
            children={<Spinner size="sm" aria-label="loading results" />}
          />
        )}
      </InputGroup>
      <FormHelperText>At least type 3 chars</FormHelperText>
    </FormControl>
  )
}
