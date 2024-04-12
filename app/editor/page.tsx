import EditorNavigation from './_components/editor-navigation'

type Props = {}

const EditorPage = (props: Props) => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-[20] bg-background overflow-hidden'>
      <EditorNavigation />
    </div>
  )
}

export default EditorPage