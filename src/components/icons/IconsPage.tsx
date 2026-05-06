import StarIcon from "./StarIcon"
import TrashIcon from "./TrashIcon"

function IconsPage() {
  return (
    <>
      <section className="p-8 max-w-3xl space-y-10">
        <div className="px-8 py-8">
          <p className="font-bold">Star Icon</p>
          <div className="mt-2">
            <StarIcon />
          </div>
          <p className="font-bold">Trash Icon</p>
          <div className="mt-2">
            <TrashIcon />
          </div>
        </div>
      </section>
    </>
  )
}

export default IconsPage
