'use client';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";

export const Header = () => {
    return (
        <header className="flex items-center justify-center h-24">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>
                    <HomeIcon />
                </MenubarTrigger>
                <MenubarTrigger>
                <WorkIcon/>
                </MenubarTrigger>
                <MenubarTrigger>
                <MailOutlineIcon/>
                </MenubarTrigger>
                <MenubarTrigger>  
                <AssignmentIndIcon/>
                </MenubarTrigger>
              </MenubarMenu>
            </Menubar>
        </header>
    )

}