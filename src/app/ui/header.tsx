'use client'
import { v4 as uuidv4 } from "uuid";
import { useDevContext } from "./components/devnamesprovider";

export default function Header() {
    const devs = useDevContext();

    return (
        <header className="navbar bg-base-100">
            {devs.map((dev, index) =>
                <div className="flex gap-1" key={uuidv4() + index}>
                    {dev.icon ? <dev.icon /> : null}
                    <a href={dev.link} className="link link-accent link-hover">
                        <span>{dev.name}</span>
                    </a>
                </div>
            )}
        </header>
    );
}