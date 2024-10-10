import { Input,Button } from "@nextui-org/react"
export const LoginPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-8 h-dvh flex flex-col">
      <h1 className="text-3xl font-semibold mb-4 mt-auto">Cuenta de Usuario</h1>
      <div className="w-full max-w-96 mx-auto mb-auto">
        <h2 className="text-2xl font-light mb-6">Iniciar sesión</h2>
        <div>
          <form className="space-y-4">
            <div>
              <Input id="email" label="Usuario" type="email" variant="bordered" radius="sm"/>
            </div>
            <div>
              <Input id="password" label="Contraseña" type="password" variant="bordered" radius="sm"/>
            </div>
            <Button type="submit" className="w-full" color="primary" radius="sm" size="lg">Iniciar Sesión</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
