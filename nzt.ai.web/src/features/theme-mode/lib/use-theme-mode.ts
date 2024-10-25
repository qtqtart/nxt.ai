import { useAppSelector } from "@app/store"

export function useThemeMode() {
  const { themeMode } = useAppSelector(({ themeMode }) => themeMode)

  return { themeMode }
}
