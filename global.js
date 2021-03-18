let appConfigsAux = null;

try {
  // eslint-disable-next-line
  appConfigsAux = appConfigs;
} catch {
  if (window.location.pathname !== "/") {
    window.location = "/";
  }
}

// eslint-disable-next-line
if (!appConfigsAux) {
  // A viariavel 'appConfigs' é instanciada globalmente no index.html, assim visivel para toda aplicação
  throw new Error("O arquivo de configuração não foi carregado corretamente");
}

let config = appConfigsAux.jornada_corretor;

export const urlsBase = {
  autenticacaoApi:
    config.autenticacaoApi.http_server + config.autenticacaoApi.resource_uri,
  usuarioApi:
    config.usuarioApi.http_server + config.usuarioApi.resource_uri,
  reembolsoApi:
    config.reembolsoApi.http_server + config.reembolsoApi.resource_uri,
  produtosApi:
    config.produtosApi.http_server + config.produtosApi.resource_uri,
  abrangenciaApi:
    config.abrangenciaApi.http_server + config.abrangenciaApi.resource_uri,
  elegibilidadeApi:
    config.elegibilidadeApi.http_server + config.elegibilidadeApi.resource_uri,
  contatoApi:
    config.contatoApi.http_server + config.contatoApi.resource_uri,
  redeCredenciadaApi:
    config.redeCredenciadaApi.http_server + config.redeCredenciadaApi.resource_uri,
  cotacoesApi:
    config.cotacoesApi.http_server + config.cotacoesApi.resource_uri,
  coparticipacaoApi:
    config.coparticipacaoApi.http_server + config.coparticipacaoApi.resource_uri,
  tabelaValorApi:
    config.tabelaValorApi.http_server + config.tabelaValorApi.resource_uri,
  comunicacaoEnvioEmailApi:
    config.comunicacaoEnvioEmailApi.http_server + config.comunicacaoEnvioEmailApi.resource_uri
};

export const apisKey = {
  autenticacaoApi: config.autenticacaoApi.api_key,
  usuarioApi: config.usuarioApi.api_key,
  reembolsoApi: config.reembolsoApi.api_key,
  produtosApi: config.produtosApi.api_key,
  abrangenciaApi: config.abrangenciaApi.api_key,
  elegibilidadeApi: config.elegibilidadeApi.api_key,
  contatoApi: config.contatoApi.api_key,
  redeCredenciadaApi: config.redeCredenciadaApi.api_key,
  cotacoesApi: config.cotacoesApi.api_key,
  coparticipacaoApi: config.coparticipacaoApi.api_key,
  tabelaValorApi: config.tabelaValorApi.api_key,
  comunicacaoEnvioEmailApi: config.comunicacaoEnvioEmailApi.api_key,

}


export const componentesConfig = config.componentesConfig;

export class AppError extends Error {
  constructor(params) {
    super(params);
  }
}
