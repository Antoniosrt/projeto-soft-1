<template>
    <div class="container mt-5">
        <p class="h2">Login</p>
        <div class="p-5 bg-white text-black">
            <form autocomplete="off">
                <div class="form-group">
                    <label for=" email">Usuário</label>
                    <input type="text" class="form-control" id="email" v-model="email" />
                </div>
                <div class="form-group mt-2">
                    <label for="senha">Senha</label>
                    <input type="password" class="form-control" id="senha" v-model="senha" />
                </div>
                <button class="btn btn-warning mt-2 me-3" @click="voltar">Voltar</button>
                <button type="button" class="btn btn-primary mt-2" @click="login">Login</button>
            </form>
        </div>
    </div>

</template>
<script>
import Swal from "sweetalert2";
export default {
    name: "Login",
    data() {
        return {
            email: "",
            senha: "",
        };
    },
    methods: {
        voltar() {
            this.$router.push({ name: "Home" });
        },
        async login() {
            let dataForm = new FormData();
            dataForm.append("email", this.email);
            dataForm.append("senha", this.senha);
            Swal.fire({
                title: "Autenticando...",
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                },
            });
            const res = await this.$api().post("/login", dataForm).then((result) => {
                Swal.close();
                this.$router.push({ name: "ListarPuzzle" });
            }).catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Erro",
                    text: "Usuário ou senha inválidos",
                });
            });
        },
    },
};
</script>