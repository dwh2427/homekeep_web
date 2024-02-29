import { ThemeOptions, createTheme, useTheme } from "@mui/material"
import { useMemo } from "react"
import {merge} from 'lodash'
import { materialThemeConfig } from "./materialThemeConfig"
const useMaterialResponsiveTheme = () => {

    const a = useTheme()
    const responsiveThemeOverides:ThemeOptions = useMemo(()=>{
        return {
            
        }
    },[])

    const theme = useMemo(()=>{
        return createTheme(merge(materialThemeConfig, {
        }))
    },[])
}

export default useMaterialResponsiveTheme