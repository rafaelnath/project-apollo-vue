/** @Props */
export declare interface MenuProps {
    name: string
    text?: string
    childs?: MenuProps[]
}

/** @Emits */
export declare interface MenuEmits {
    onClick: [name: string]
}