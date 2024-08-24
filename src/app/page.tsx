import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

export default function Home() {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        Home
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        About
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        Services
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
}
