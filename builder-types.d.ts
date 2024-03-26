type EditorBtns = 
    | "text"
    | "container"
    | "section"
    | "contactForm"
    | "paymentForm"
    | "link"
    | "2col"
    | "video"
    | "__body"
    | "image"
    | null
    | "3col"

type DeviceTypes = "Mobile" | "Tablet" | "Desktop"

type EditorElement = {
    id: string
    styles: React.CSSProperties
    name: string
    type: EditorBtns
    content: EditorElement[] | {}
}

type Editor = {
    liveMode: boolean
    elements: EditorElement[]
    selectedElement: EditorElement
    device: DeviceTypes
    previewMode: boolean
    pageId?: string
}

type HistoryState = {
    History: EditorElement[]
    index: number
}

type EditorState = {
    editor: Editor
    history: HistoryState
}