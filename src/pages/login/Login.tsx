import { useState } from 'react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input'

interface loginFormState {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [form, setForm] = useState<loginFormState>({ password: '', email: '' })
    const [nameError, setNameError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value })
    }

    const submitForm = () => {

    }
    return (
        <div className=' flex items-center justify-center min-h-screen bg-blue-950'>
            <div className='w-full max-w-md bg-white shadow-md rounded-md p-8'>
                <form onSubmit={submitForm}>
                    <div className='mb-4'>
                        <Input
                            placeholder="Email"
                            label="Email"
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            inputStyle={`bg-gray-100 placeholder:text-sm rounded p-1 mb-2 border-solid border ${nameError ? "border-red-400" : "border-gray-400"
                                }`}
                        />
                    </div>
                    <div className='mb-4'>
                        <Input
                            placeholder="Password"
                            label="Password"
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            inputStyle={`bg-gray-100 placeholder:text-sm rounded p-1 mb-2 border-solid border ${nameError ? "border-red-400" : "border-gray-400"
                                }`}
                        />
                    </div>
                    <div>
                        <Button
                            buttonStyle="rounded bg-blue-500 py-1 px-7 text-white"
                            title="Login"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login