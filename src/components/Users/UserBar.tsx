import { AppBar, Avatar, Container, IconButton, Toolbar, Tooltip, Typography } from "@mui/material"
import style from "./Users.module.css"

interface Props {
    name: string
}

export default function UserBar({ name }: Props) {
    return (
        <AppBar position="static" sx={{backgroundColor:"#1a49a5"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <div className={style.bar_init}>
                    </div>

                    <div className={style.bar_init}>
                    </div>

                    <div className={style.bar_user}>
                        <Tooltip title="Open settings">
                            <IconButton>
                                <Avatar alt={name} src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Typography className={style.bar_name}>{name}</Typography>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}