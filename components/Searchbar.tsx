import { useRef, useState, useEffect, ChangeEventHandler } from 'react'
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
  const sender = useRef<number | null>(null)
  const [keyword, setKeyword] = useState('mountain')

  useEffect(() => {
    if (sender.current) clearTimeout(sender.current)
    if (keyword.length >= 3) {
      sender.current = window.setTimeout(() => submitFunc(keyword), 3000)
    }
  }, [keyword])

  const handleKeyword: ChangeEventHandler<HTMLInputElement> = e => {
    setKeyword(e.target.value)
  }

  return (
    <FormControl>
      <FormLabel htmlFor="keyword">Keyword</FormLabel>
      <InputGroup size="sm">
        <Input
          id="keyword"
          value={keyword}
          onChange={handleKeyword}
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
