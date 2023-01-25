import { Button } from './components/Button'

import cursordefault from './assets/cursordefault.svg'
import cursornotallowed from './assets/cursornotallowed.svg'
import cursorprogress from './assets/cursorprogress.svg'
import cursormove from './assets/cursormove.svg'

export function App() {
  return (
    <div className="flex flex-row w-full min-h-screen">
      <div className="flex-1 px-20 pt-24 pb-6">
        <h2 className="font-sans font-bold text-[2rem] text-white">
          Tipo de Botões
        </h2>
        <p className="font-sansRoboto font-normal text-xl text-white opacity-70 mb-16">
          Dentro de um layout, botões servem para destacar ações importantes a
          serem tomadas. Acompanhe abaixo um exemplo de tipos e propriedades.
        </p>
        <div className="flex flex-col bg-purple-800 rounded-lg">
          <div className="flex flex-row justify-center items-center text-center gap-2 py-6 font-sansRoboto font-normal text-[0.6875rem]">
            <span className="basis-[15%]"></span>
            <span className="basis-[25%]">BOTÃO PRIMÁRIO</span>
            <span className="basis-[25%]">BOTÃO SECUNDÁRIO</span>
            <span className="basis-[25%]">BOTÃO TERCIÁRIO</span>
            <span className="basis-[10%] mr-2">CURSOR</span>
          </div>

          <div className="flex flex-row justify-center items-center text-center  font-sansRoboto font-normal text-[0.6875rem]">
            <span className="basis-[15%]">DEFAULT</span>
            <span className="basis-[25%] flex justify-center items-center bg-zinc-900 h-24">
              <Button
                buttonState="default"
                buttonType="primary"
                text="DEFAULT PRIMARY"
              />
            </span>
            <span className="basis-[25%] flex justify-center items-center bg-zinc-900 h-24">
              <Button
                buttonState="default"
                buttonType="secondary"
                text="DEFAULT SECONDARY"
              />
            </span>
            <span className="basis-[25%] flex justify-center items-center bg-zinc-900 h-24">
              <Button
                buttonState="default"
                buttonType="tertiary"
                text="DEFAULT TERTIARY"
              />
            </span>
            <span className="basis-[10%] flex justify-center items-center bg-zinc-900 h-24 mr-2">
              <img src={cursordefault} alt="Cursor Default" />
            </span>
          </div>

          <div className="flex flex-row justify-center items-center text-center font-sansRoboto font-normal text-[0.6875rem]">
            <span className="basis-[15%]">HOVER</span>
            <span className="basis-[25%] flex justify-center items-center bg-zinc-900 h-24">
              <Button
                buttonState="hover"
                buttonType="primary"
                text="HOVER PRIMARY"
              />
            </span>
            <span className="basis-[25%] flex justify-center items-center bg-zinc-900 h-24">
              <Button
                buttonState="hover"
                buttonType="secondary"
                text="HOVER SECONDARY"
              />
            </span>
            <span className="basis-[25%] flex justify-center items-center bg-zinc-900 h-24">
              <Button
                buttonState="hover"
                buttonType="tertiary"
                text="HOVER TERTIARY"
              />
            </span>
            <span className="basis-[10%] flex justify-center items-center bg-zinc-900 h-24 mr-2">
              <img src={cursordefault} alt="Cursor Default" />
            </span>
          </div>

          <div className="flex flex-row justify-center items-center text-center font-sansRoboto font-normal text-[0.6875rem]">
            <span className="basis-[15%]">FOCUS</span>
            <span className="basis-[25%] flex justify-center items-center bg-zinc-900 h-24">
              <Button
                buttonState="focus"
                buttonType="primary"
                text="FOCUS PRIMARY"
              />
            </span>
            <span className="basis-[25%] flex justify-center items-center bg-zinc-900 h-24">
              <Button
                buttonState="focus"
                buttonType="secondary"
                text="FOCUS SECONDARY"
              />
            </span>
            <span className="basis-[25%] flex justify-center items-center bg-zinc-900 h-24">
              <Button
                buttonState="focus"
                buttonType="tertiary"
                text="FOCUS TERTIARY"
              />
            </span>
            <span className="basis-[10%] flex justify-center items-center bg-zinc-900 h-24 mr-2">
              <img src={cursordefault} alt="Cursor Default" />
            </span>
          </div>

          <div className="flex flex-row justify-center items-center text-center font-sansRoboto font-normal text-[0.6875rem]">
            <span className="basis-[15%]">DISABLED</span>
            <span className="basis-[25%] flex justify-center items-center bg-zinc-900 h-24">
              <Button
                buttonState="disabled"
                buttonType="primary"
                text="DISABLED PRIMARY"
              />
            </span>
            <span className="basis-[25%] flex justify-center items-center bg-zinc-900 h-24">
              <Button
                buttonState="disabled"
                buttonType="secondary"
                text="DISABLED SECONDARY"
              />
            </span>
            <span className="basis-[25%] flex justify-center items-center bg-zinc-900 h-24">
              <Button
                buttonState="disabled"
                buttonType="tertiary"
                text="DISABLED TERTIARY"
              />
            </span>
            <span className="basis-[10%] flex justify-center items-center bg-zinc-900 h-24 mr-2">
              <img src={cursornotallowed} alt="Cursor Not Allowed" />
            </span>
          </div>

          <div className="flex flex-row justify-center items-center text-center font-sansRoboto font-normal text-[0.6875rem]">
            <span className="basis-[15%]">LOADING</span>
            <span className="basis-[25%] flex justify-center items-center bg-zinc-900 h-24">
              <Button
                buttonState="loading"
                buttonType="primary"
                text="LOADING PRIMARY"
              />
            </span>
            <span className="basis-[25%] flex justify-center items-center bg-zinc-900 h-24">
              <Button
                buttonState="loading"
                buttonType="secondary"
                text="LOADING SECONDARY"
              />
            </span>
            <span className="basis-[25%] flex justify-center items-center bg-zinc-900 h-24">
              <Button
                buttonState="loading"
                buttonType="tertiary"
                text="LOADING TERTIARY"
              />
            </span>
            <span className="basis-[10%] flex justify-center items-center bg-zinc-900 h-24 mr-2">
              <img src={cursorprogress} alt="Cursor Not Allowed" />
            </span>
          </div>

          <div className="flex flex-row justify-center items-center text-center font-sansRoboto font-normal text-[0.6875rem] mb-2">
            <span className="basis-[15%]">MOVABLE</span>
            <span className="basis-[25%] flex justify-center items-center bg-zinc-900 h-24">
              <Button
                buttonState="movable"
                buttonType="primary"
                text="MOVABLE PRIMARY"
              />
            </span>
            <span className="basis-[25%] flex justify-center items-center bg-zinc-900 h-24">
              <Button
                buttonState="movable"
                buttonType="secondary"
                text="MOVABLE SECONDARY"
              />
            </span>
            <span className="basis-[25%] flex justify-center items-center bg-zinc-900 h-24">
              <Button
                buttonState="movable"
                buttonType="tertiary"
                text="MOVABLE TERTIARY"
              />
            </span>
            <span className="basis-[10%] flex justify-center items-center bg-zinc-900 h-24 mr-2">
              <img src={cursormove} alt="Cursor Not Allowed" />
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[26.375rem] px-11 pt-24 bg-purple-900">
        <h2 className="font-sans font-bold text-[2rem] text-white">
          Teste os botões
        </h2>
        <p className="font-sansRoboto font-normal text-xl text-white opacity-70 mb-16">
          Interaja com os botões e observe a mudança de aparência e de cursores
        </p>

        <Button
          buttonState="default"
          buttonType="primary"
          text="INTERAJA COMIGO"
          className="mb-8 w-full"
        />

        <Button
          buttonState="disabled"
          buttonType="secondary"
          text="INTERAJA COMIGO"
          className="mb-8 w-full"
        />

        <Button
          buttonState="movable"
          buttonType="tertiary"
          text="INTERAJA COMIGO"
          className="mb-8 w-full"
        />
      </div>
    </div>
  )
}
