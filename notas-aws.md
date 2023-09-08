# Nuvem AWS

Curso gratuito oferecido pela DIO, ministrado por Renan Oliveira

## Cloud Computing

Serviços, processamento e armazenamento otimizados através de servidores remotos, possibilitando processos simultâneos, seguros (através de criptografia), econômicos (comparado ao armazenamento local), escaláveis, rápidos, independente da distância.<br>
_Exemplos: Dropbox, Google Docs, Amazon, streamings (Netflix, Spotify)_

### 5 Benefícios da Cloud Computing

1. Redução de Custos

   - Virtual Machine - os provedores mantém e atualizam recursos de hardware e software, evitando a compra de uma máquina física de grande custo; Pode ser pago só pelo que é utilizado

2. Acesso Remoto

   - Desde que haja conexão com a internet, pode ser acessado de qualquer lugar.

3. Flexibilidade

   - Permite que todos os recursos sejam escaláveis, seja armazenamento ou processamento

4. Eficiência

   - Permite que as empresas foquem nas suas principais atividades e reduzam a carga administrativa de gerenciamento e infraestrutura de TI, tercerizando a gestão e manutenção de ativos como computadores, servidores, etc

5. Backup e Recuperação de Desastre (Disaster Recovery)
   - Permite que tenha um backup com camadas extras de segurança além do servidor e recuperação rápida minimizando tempo de inatividade

## Modelos de serviços da Nuvem

### IaaS - Infrastructure as a service

Contratação de servidores e armazenamento de um provedor na nuvem, como a AWS para ter melhor capacidade de armazenamento e processamento (virtual machine)

### PaaS - Platform as a Service

Pode ser utilizado ferramentas de uma plataforma e infraestrutura de um provedor em nuvem sem precisar se preocupar com manutenção de bibliotecas e frameworks (i.e. Heroku)

### SaaS - Software as a Service

Serviço de software oferecido de forma remota/online, eliminando a necessidade de manutenção de criação e infraestrutura (i.e. Trello, Google Drive, 99, Uber, iFood...)

### CaaS - Container as a Service

Uma forma de 'empacotar' e executar apps, com ambiente consistente e facilidade de implantação e gerenciamente desses apps. (i.e. Docker -> Spotify)

## AWS

Criada em 2016 pela Amazon, a Amazon Web Services oferece serviços de nuvem, como aramazenamento, processamento, IA, data analitcs, etc.

### Amazon S3

Amazon Simple Storage Service - Servidor de armazenamento na nuvem. Na conta da AWS, você pode criar um bucket (folder) através do console principal e armazenar arquivos diversos. (espaço físico)

### Amazon EC2

Amazon Elastic Comput Cloud - Um dos mais importantes, o Serviço AWS de processamento na nuvem, um 'supercomputador' usado para executar aplicativos e serviços, criar ambientes de testes e desenvolvimento e executar operações de bidg data.

### Amazon SNS

Amazon Simple Notification Service, é um serviço AWS de notificações que permite a entrega de mensagens para dispositivos móveis, endereços de email ou endpoints (HTTP)

### Amazon DynamoDB

Também um serviço de banco de dados, mas é _NoSQL_, ou seja, não-relacional, que são dados para análise de tráfego web, por exemplo, que não são de clientes.

### Amazon RDS

Amazon Relational Database Service - Serviço de criação, escalabilidade, armazenamento e gerenciamento de bancos de dados relacional (SQL/JSON - espaço lógico)

### Amazon Lambda

Serviço de computação sem servidor (serveless), sem VM para executar o processamento. Usado em projetos mais escaláveis, sem preocupação com serviço de TI e manutenção

### Amazon CloudFront

Serviço de distribuição de conteúdo web como imagens e videos de maneira rápida e segura.

### Amazon Elastic Beanstalk

Serviço de gerenciamento de apps que permitem implantar e gerenciar apps da web.

### Amazon SQS

Permite a comunicação entre diferentes componentes (mensageria assíncrona). Usado para gerenciar filas de mensagens em diferentes aplicativos.

### Redes na AWS

É a forma como redes e apps se comunicam na internet entre si. Quando você solicita uma corrida por app, ele usa uma rede da AWS para enviar informações para o motorista que também está conectado a esta rede de forma rápida e segura. Rede (como os locais se conectam) ≠ regiões e zonas (locais físicos onde serão criados os recursos). Quando você cria uma VM, você definir em qual região será criada e em que zona ela vai estar, multi-zone, single-zone ou ambos. A rede deve ser definida para habilitar apenas IPs que são confiáveis, por exemplo. É através do _internet protocol_ que você consegue acessar outras máquinas e conectá-las.

A rede de internet se conecta primeiro com um servidor e esse servidor que irá se conectar com outros servidores para poder trazer os resultados.
A AWS também processa grande volume de dados, sem escalável e flexível.

Basicamente, a AWS é como uma cidade com muitas casas, que seriam as regiões em diferentes lugares dessa cidade (locais fisicos ao redor do mundo onde a AWS agrupa data centers), e cada região tem várias zonas de disponibilidade para armazenar dados e apps (um ou mais data centers discretos com redundancia de energia, rede e conectividade em uma região AWS), que seriam como quartos ou andares dessa casa. A vantagem das regiões é poder escolher a mais próxima dos seus clientes, tornando o acesso mais rápido e a vantagem de diversas zonas é ter uma 'rota de fuga' caso a zona em que você tem seu armazenamento seja afetada por algum problema. Se você tiver vários servidores em diferentes zonas de disponibilidade mas dentro da mesma região, será garantido que o serviço não sofrerá impacto no caso de um problema.

### Segurança na AWS

- Identity Access Management (IAM) - gerencia controle e fluxo dos usuários aos serviços, apps, arquivos, VMs, etc
- Criptografia - codificação de informações (utilizada no S3, RDS)
- Monitoramento e Auditoria Interna - Cloud Trail e Cloud Watch - monitoramento e acompanhamento de dados em tempo real
- Backup e Disaster Recovery - S3 Glacier

### Modelo de responsabilidade compartilhada

A responsabilidade pela utilização e segurança dos serviços e dados armanezados na AWS se divide entre duas entidades: a AWS e o customer.
O customer é responsável pela segurança **na** nuvem, por tudo aquilo que fornece a AWS, dados, arquivos, aplicações, SO, rede e configuração de firewall e acessos bem como informações de cobrança e utilização dos serviços cobrados, tendo a documentação disponível para auxílio.
A AWS é responsável pela segurnaça **da** nuvem

https://aws.amazon.com/compliance/shared-responsibility-model/

### Conceito de Menor Privilégio

Através do IAM, podemos oferecer ao usuário o minimo necessário para conseguir trabalhar, sendo uma boa prática de segurança. Para isso, cria-se usuário especifico e que não sejam do tipo _root_, dê acessos específicos, coloque-o em um ou mais grupos (fácil gerenciamento de permissões) e dê um login para essse usuário (opcional); Pode-se também atribuir funções.
