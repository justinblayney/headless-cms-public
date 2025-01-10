import ContainerContent from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <ContainerContent>
        <div className="">
          {preview ? (
            <>
              This is page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className=""
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              
            </>
          )}
        </div>
      </ContainerContent>
    </div>
  )
}
