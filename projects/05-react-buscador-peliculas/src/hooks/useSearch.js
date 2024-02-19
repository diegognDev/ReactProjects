import { useEffect, useState, useRef } from 'react'

export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('Busqueda vacía, introduzca un titulo para buscar')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('El titulo no puede contener números')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}
