import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ClipboardList, FileText, House, Landmark, List, UserRound } from "lucide-react"

const listMenu = [
  {"name" : "Dashboard",
 "url" : "/admin",
 "icon" : House
},
{"name" : "User Management",
 "url" : "/admin/user-management",
 "icon" : UserRound
},
{
"name" : "Category",
"url" : "/admin/category",
"icon" : List
},
{
"name" : "Jurusan",
"url" : "/admin/jurusan",
"icon" : ClipboardList
},
{
"name" : "Article",
"url" : "/admin/article",
"icon" : FileText
},
{
"name" : "Profile",
"url" : "/admin/profile",
"icon" : Landmark
}
]



export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <h1 className="text-lg font-bold text-center">Admin Dashboard</h1>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {listMenu.map((menu) => (
                <SidebarMenuItem key={menu.name}>
                  <SidebarMenuButton asChild>
                    <a href={menu.url}>
                      <menu.icon />
                      <span>{menu.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}