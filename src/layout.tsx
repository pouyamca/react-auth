import { Stack } from "@mui/material"

export interface ILayout {
    children: React.ReactNode
}


const Layout = (props: ILayout) => {

    const { children } = props

    return (
        <Stack justifyContent='center' alignItems='center' sx={{ height: '100vh', background: '#fafafa' }}>
            {children}
        </Stack>
    )
}

export default Layout