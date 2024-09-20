import { useState } from 'react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input'
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useNavigate } from 'react-router-dom'
import { login, register } from '../../services/auth/authSlice'

interface registerFormState {
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string
}

const Register: React.FC = () => {
    const [form, setForm] = useState<registerFormState>({ name: '', password: '', email: '', confirmPassword: '' })
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value })
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.email.length) {
            setEmailError("ایمیل اجباری است")
        }

        dispatch(register(form)).then(() => {
            navigate('/');
        })
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
                            inputStyle={`bg-gray-100 placeholder:text-sm rounded p-1 mb-2 border-solid border ${emailError ? "border-red-400" : "border-gray-400"
                                }`}
                        />
                    </div>
                    <div className='mb-4'>
                        <Input
                            placeholder="Name"
                            label="Name"
                            id="name"
                            name="name"
                            value={form.name}
                            inputError={nameError}
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
                    <div className='mb-4'>
                        <Input
                            placeholder="Confirm Password"
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            inputStyle={`bg-gray-100 placeholder:text-sm rounded p-1 mb-2 border-solid border ${nameError ? "border-red-400" : "border-gray-400"
                                }`}
                        />
                    </div>
                    <div>
                        <Button
                            buttonStyle="rounded bg-blue-500 py-1 px-7 text-white"
                            title="Register"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register