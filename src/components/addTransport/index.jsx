import React, { useRef, useState } from 'react';
import { ContainerForm } from './styled';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Grid from '@material-ui/core/Grid';
import Select from "@material-ui/core/Select";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';





import emailjs from '@emailjs/browser';


export const AddTransport = () => {

    const form = useRef();
    const [aluno, setAluno] = useState([
        {
            name: "",
            idade: "",
            turno: "",
            serie: "",
            turma: "",
            itinerario: ""
        }
    ])
    const [endereco, setEndereco] = useState({
        end: '',
        cep: ''
    })
    const [responsavel, setResponsavel] = useState({
        nome: "",
        cpf: "",
        email: "",
        celular: "",
    })
    const [escola, setEscola] = useState()

    const [obs, setObs] = useState()



    const addAluno = (index, e) => {
        setAluno([...aluno, { name: '', idade: '', turno: '', serie: '', turma: '', itinerario: '' }])
    }

    const removeAluno = (index) => {
        let arrayAluno = []
        arrayAluno = [...aluno]
        arrayAluno.splice(index, 1)
        setAluno(arrayAluno)
    }

    const handleAluno = (index, event) => {
        const values = [...aluno]
        values[index][event.target.name] = event.target.value
        setAluno(values)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_djxar99', 'template_p3my7rf', form.current, 'gbjikoeEs9PAACR9W')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const isMobile = window.screen.width < 1024

    return (
        <ContainerForm >
            <form ref={form} onSubmit={sendEmail}>

                {/* ESCOLA */}
                <div style={{ display: 'flex', gap: '3px', marginTop: '15px', flexDirection: isMobile ? 'column' : 'row', width: '100%' }}>

                    <Grid item xs={12} lg={4} md={4}>

                        <Select
                            native
                            name='escola'
                            value={escola}
                            onChange={event => setEscola(event.target.value)}
                            fullWidth

                            input={
                                <OutlinedInput
                                    name='itinerario'
                                    labelWidth={0}
                                />
                            }
                        >
                            <option value='' >Escolha Escola</option>
                            <option value={'escola parque'} >Escola Parque</option>
                            <option value={'escola Americana'}>Escola Americana</option>
                            <option value={'CSI'}>Colegio Santo Inacio</option>
                        </Select>
                    </Grid>
                </div>
                {/* _________ */}

                {/* RESPONSAVEL */}

                <Grid container >
                    <div style={{ display: 'flex', gap: '3px', marginTop: '15px', flexDirection: isMobile ? 'column' : 'row', width: '100%' }}>
                        <Grid item xs={12} lg={4} md={4}>
                            <TextField
                                name="responsavelNome"
                                label="Nome do Responsavel"
                                value={responsavel.nome}
                                onChange={event => setResponsavel({ nome: event.target.value })}
                                fullWidth
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12} lg={3} md={3}>
                            <TextField
                                name="cpf"
                                label="CPF"
                                value={responsavel.cpf}
                                onChange={event => setResponsavel({ cpf: event.target.value })}
                                fullWidth
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12} lg={3} md={3}>
                            <TextField
                                name="email"
                                label="E-mail"
                                value={responsavel.email}
                                onChange={event => setResponsavel({ email: event.target.value })}
                                fullWidth
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12} lg={3} md={3}>
                            <TextField
                                name="celular"
                                label="Telefone Celular"
                                value={responsavel.cpf}
                                onChange={event => setResponsavel({ celular: event.target.value })}
                                fullWidth
                                variant="outlined" />
                        </Grid>


                    </div>
                </Grid>

                {/* ___________ */}


                {/* DADOS ENDERECO */}

                <Grid container >
                    <div style={{ display: 'flex', gap: '3px', marginTop: '15px', flexDirection: isMobile ? 'column' : 'row', width: '100%' }}>
                        <Grid item xs={12} lg={8} md={8}>
                            <TextField
                                name="endereco"
                                label="Endereço Completo"
                                value={endereco.end} ß
                                onChange={event => setEndereco({ end: event.target.value })}
                                fullWidth
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12} lg={2} md={2}>
                            <TextField
                                name="cep"
                                label="CEP"
                                value={endereco.end} ß
                                onChange={event => setEndereco({ cep: event.target.value })}
                                fullWidth
                                variant="outlined" />
                        </Grid>

                    </div>
                </Grid>

                {/* ___________ */}


                {/* OBS */}

                <div style={{ display: 'flex', gap: '3px', margin: '15px 0', flexDirection: isMobile ? 'column' : 'row', width: '100%' }}>
                    <Grid item xs={12} lg={8} md={8}>
                        <TextField
                            name="obs"
                            label="Observações"
                            value={obs}
                            onChange={event => setObs(event.target.value)}
                            fullWidth
                            variant="outlined" />
                    </Grid>
                </div>
                {/* ___________ */}

                {/* ALUNO */}

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>Adicionar Aluno</div>
                    <div>
                        <IconButton onClick={addAluno}>
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </div>
                </div>
                {aluno.map((item, index) =>
                    <Grid container >
                        <div style={{ display: 'flex', gap: '3px', marginBottom: '20px', flexDirection: isMobile ? 'column' : 'row', width: '100%' }}>
                            <Grid item xs={12} lg={4} md={4}>
                                <TextField
                                    name="name"
                                    label="Nome do Aluno"
                                    value={item.nome} ß
                                    onChange={event => handleAluno(index, event)}

                                    fullWidth
                                    variant="outlined" />
                            </Grid>
                            <Grid item xs={12} lg={2} md={2}>
                                <TextField
                                    name="idade"
                                    label="Data de nascimento"
                                    type="date"
                                    defaultValue="aaaa-mm-aa"
                                    variant="outlined"
                                    onChange={event => handleAluno(index, event)}

                                    value={item.idade}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }} />

                            </Grid>
                            <Grid item xs={12} lg={2} md={2}>

                                <Select
                                    native
                                    name='itinerario'
                                    value={item.itinerario}
                                    onChange={event => handleAluno(index, event)}
                                    fullWidth

                                    input={
                                        <OutlinedInput
                                            name='itinerario'
                                            labelWidth={0}
                                        />
                                    }
                                >
                                    <option value={'ida e volta'} >Ida e Volta</option>
                                    <option value={'ida'}>Somente Ida</option>
                                    <option value={'volta'}>Somente Volta</option>
                                </Select>
                            </Grid>

                            <Grid item xs={12} lg={2} md={2}>

                                <Select
                                    native
                                    name='turno'
                                    value={item.turno}
                                    onChange={event => handleAluno(index, event)}
                                    fullWidth

                                    input={
                                        <OutlinedInput
                                            name='turno'
                                            labelWidth={0}
                                        />
                                    }
                                >
                                    {/* <option value="" >Turno</option> */}
                                    <option value={'manha'}>Manhã</option>
                                    <option value={'tarde'}>Tarde</option>
                                    <option value={'integral'}>Integral</option>
                                </Select>
                            </Grid>


                            <Grid item xs={12} lg={1} md={1}>
                                <TextField
                                    name="serie"
                                    label="Serie"
                                    value={item.serie}
                                    onChange={event => handleAluno(index, event)}

                                    fullWidth
                                    variant="outlined" />

                            </Grid>
                            <Grid item xs={12} lg={1} md={1}>

                                <TextField
                                    name="turma"
                                    label="Turma"
                                    value={item.turma}
                                    onChange={event => handleAluno(index, event)}

                                    fullWidth
                                    variant="outlined" />
                            </Grid>


                            <IconButton onClick={removeAluno}>
                                <RemoveCircleOutlineIcon />
                            </IconButton>
                        </div>
                    </Grid>
                )}
                {/* ____________ */}
                <div style={{padding: '10px', display:'flex', justifyContent: 'end'}}>
                    <Button variant="contained" color="primary" size="large" type="submit" value="Send" >Enviar </Button>
                </div>
            </form>
        </ContainerForm>
    );
};



export default AddTransport







