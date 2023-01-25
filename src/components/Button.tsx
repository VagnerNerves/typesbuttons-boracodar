import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

import { CircleNotch, List } from 'phosphor-react'

const TYPE_BUTTONTYPE = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary'
}

const TYPE_BUTTONSTATE = {
  default: 'default',
  hover: 'hover',
  focus: 'focus',
  disabled: 'disabled',
  loading: 'loading',
  movable: 'movable'
}

interface ButtomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  buttonType: keyof typeof TYPE_BUTTONTYPE
  buttonState: keyof typeof TYPE_BUTTONSTATE
}

export function Button({
  text,
  buttonType,
  buttonState,
  ...rest
}: ButtomProps) {
  return (
    <button
      {...rest}
      disabled={
        buttonState === TYPE_BUTTONSTATE.disabled ||
        buttonState === TYPE_BUTTONSTATE.loading
      }
      className={clsx(
        `flex justify-center items-center gap-2 px-6 py-3 rounded-3xl transition-all duration-200 border-2 border-solid border-transparent focus:outline-none focus:border-purple-100 font-sans font-medium text-sm ${rest.className}`,
        {
          'cursor-default':
            buttonState === TYPE_BUTTONSTATE.default ||
            buttonState === TYPE_BUTTONSTATE.hover ||
            buttonState === TYPE_BUTTONSTATE.focus,
          'cursor-not-allowed opacity-50':
            buttonState === TYPE_BUTTONSTATE.disabled,
          'cursor-progress': buttonState === TYPE_BUTTONSTATE.loading,
          'cursor-move': buttonState === TYPE_BUTTONSTATE.movable,
          'bg-purple-500 hover:bg-purple-400 disabled:hover:bg-purple-500':
            buttonType === TYPE_BUTTONTYPE.primary &&
            (buttonState === TYPE_BUTTONSTATE.default ||
              buttonState === TYPE_BUTTONSTATE.focus ||
              buttonState === TYPE_BUTTONSTATE.disabled ||
              buttonState === TYPE_BUTTONSTATE.loading ||
              buttonState === TYPE_BUTTONSTATE.movable),
          'bg-zinc-600 hover:bg-zinc-500 disabled:hover:bg-zinc-600':
            buttonType === TYPE_BUTTONTYPE.secondary &&
            (buttonState === TYPE_BUTTONSTATE.default ||
              buttonState === TYPE_BUTTONSTATE.focus ||
              buttonState === TYPE_BUTTONSTATE.disabled ||
              buttonState === TYPE_BUTTONSTATE.loading ||
              buttonState === TYPE_BUTTONSTATE.movable),
          'bg-purple-400 cursor-default':
            buttonType === TYPE_BUTTONTYPE.primary &&
            buttonState === TYPE_BUTTONSTATE.hover,
          'bg-zinc-500 cursor-default':
            buttonType === TYPE_BUTTONTYPE.secondary &&
            buttonState === TYPE_BUTTONSTATE.hover,
          'border-purple-100': buttonState === TYPE_BUTTONSTATE.focus
        }
      )}
    >
      {buttonState === TYPE_BUTTONSTATE.loading && (
        <CircleNotch size={16} className="animate-spin text-white" />
      )}
      {buttonState === TYPE_BUTTONSTATE.movable && (
        <List size={16} className="text-white" />
      )}
      {text}
    </button>
  )
}
