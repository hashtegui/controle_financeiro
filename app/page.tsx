'use client';

import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Form from '@radix-ui/react-form';

import {
    ArrowBottomRightIcon,
    ArrowTopRightIcon,
    Cross1Icon,
    MagnifyingGlassIcon,
    PlusIcon,
} from '@radix-ui/react-icons';

import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen bg-violet-950 flex-col items-center justify-between p-24">
            <div className="max-w-7xl max-md:px-8 max-md:text-center w-full h-3/4 flex flex-col gap-8 py-8 px-32 bg-white rounded-3xl">
                <section className="w-full flex items-center justify-end">
                    <Image
                        className="rounded-full"
                        src="https://github.com/italomagnov.png"
                        alt="foto de perfil"
                        width={48}
                        height={48}
                    />
                </section>

                <section className="w-full flex flex-col gap-4">
                    <span className="text-md font-semibold">Saldo Atual</span>
                    <h1 className="text-5xl font-bold text-violet-500">
                        R$ 3.000,00
                    </h1>
                </section>

                <section className="w-full flex items-center gap-4 max-lg:flex-col">
                    <div className="relative w-full">
                        <MagnifyingGlassIcon className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-500 bg-gray-100" />
                        <input
                            className="w-full rounded-md bg-gray-100 text-black border-none text-base outline-gray-400 p-4"
                            type="search"
                            placeholder="Buscar..."
                        />
                    </div>
                    <div className="w-full max-md:justify-center text-base text-white font-semibold bg-emerald-500 rounded-md flex items-center gap-1 py-4 px-2">
                        <ArrowTopRightIcon />
                        <span>Entradas:</span>
                        <span>R$ 3.000,00</span>
                    </div>
                    <div className="w-full max-md:justify-center text-base text-white font-semibold bg-red-500 rounded-md flex items-center gap-1 py-4 px-2">
                        <ArrowBottomRightIcon />
                        <span>Saídas:</span>
                        <span>R$ 9,000,00</span>
                    </div>

                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <button className="w-full max-md:justify-center flex items-center justify-center font-semibold text-white bg-violet-500 gap-2 rounded-md border py-4 px-2">
                                <PlusIcon />
                                Nova Transação
                            </button>
                        </Dialog.Trigger>
                        <Dialog.Portal>
                            <Dialog.Overlay className="fixed inset-0 bg-black/50">
                                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 text-gray-900 rounded-md max-w-md w-full flex flex-col gap-8">
                                    <div className="flex item-center justify-between">
                                        <h2 className="text-xl">
                                            Nova Transação
                                        </h2>
                                        <Dialog.Close>
                                            <Cross1Icon />
                                        </Dialog.Close>
                                    </div>
                                    <Form.Root className="flex flex-col gap-4">
                                        <RadioGroup.Root
                                            className="flex items-center gap-4"
                                            defaultValue="entrada"
                                        >
                                            <div className="flex items-center gap-2">
                                                <RadioGroup.Item
                                                    className="bg-white border border-emerald-500 w-6 h-6 rounded-full outline-none cursor-default"
                                                    value="entrada"
                                                    id="r1"
                                                >
                                                    <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-emerald-500" />
                                                </RadioGroup.Item>
                                                <label
                                                    className="text-lg text-emerald-500"
                                                    htmlFor="r1"
                                                >
                                                    Entrada
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RadioGroup.Item
                                                    className="bg-white border border-red-500 w-6 h-6 rounded-full outline-none cursor-default"
                                                    value="saida"
                                                    id="r2"
                                                >
                                                    <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-red-500" />
                                                </RadioGroup.Item>
                                                <label
                                                    className="text-lg text-red-500"
                                                    htmlFor="r2"
                                                >
                                                    Saída
                                                </label>
                                            </div>
                                        </RadioGroup.Root>

                                        <Form.Field
                                            className="flex flex-col gap-1"
                                            name="valor"
                                        >
                                            <div className="flex items-baseline justify-between">
                                                <Form.Label className="text-gray-900 text-md font-semibold">
                                                    Valor
                                                </Form.Label>
                                                <Form.Message
                                                    className="text-sm text-gray-900"
                                                    match="valueMissing"
                                                >
                                                    Por favor, entre com o valor
                                                </Form.Message>
                                                <Form.Message match="typeMismatch">
                                                    Por favor, entre com um
                                                    valor válido
                                                </Form.Message>
                                            </div>
                                            <Form.Control asChild>
                                                <input
                                                    className="w-full box-border rounded-md bg-gray-100 text-black border-none text-base outline-gray-400 p-4"
                                                    type="number"
                                                    required
                                                />
                                            </Form.Control>
                                        </Form.Field>

                                        <Form.Field
                                            className="flex flex-col gap-1"
                                            name="descricao"
                                        >
                                            <div className="flex items-baseline justify-between">
                                                <Form.Label className="text-gray-900 text-md font-semibold">
                                                    Descrição
                                                </Form.Label>
                                                <Form.Message
                                                    className="text-sm text-gray-900"
                                                    match="valueMissing"
                                                >
                                                    Por favor, escreva uma
                                                    descrição
                                                </Form.Message>
                                                <Form.Message match="typeMismatch">
                                                    Por favor, digite uma
                                                    descrição válida
                                                </Form.Message>
                                            </div>
                                            <Form.Control asChild>
                                                <input
                                                    className="w-full box-border rounded-md bg-gray-100 text-black border-none text-base outline-gray-400 p-4"
                                                    type="text"
                                                    required
                                                />
                                            </Form.Control>
                                        </Form.Field>

                                        <Form.Submit asChild>
                                            <button className="bg-emerald-500 text-white font-semibold py-4 px-2 rounded-md mt-4">
                                                Adicionar Transação
                                            </button>
                                        </Form.Submit>
                                    </Form.Root>
                                </Dialog.Content>
                            </Dialog.Overlay>
                        </Dialog.Portal>
                    </Dialog.Root>
                </section>
            </div>
        </main>
    );
}
