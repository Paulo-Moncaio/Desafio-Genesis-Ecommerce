CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT,
  price NUMERIC(10, 2),
  category TEXT,
  description TEXT,
  image TEXT
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  category TEXT
);


-- Inserir novos dados
INSERT INTO products (name, category, price, description, image) VALUES 
('SSD Crucial MX500 1TB', 'Armazenamento', 179.99, 'Unidade de estado sólido de alta velocidade e durabilidade.', 'https://http2.mlstatic.com/D_NQ_NP_664837-MLB53380498874_012023-W.jpg'),
('Fonte de Alimentação Corsair CX550M', 'Fontes', 79.99, 'Fonte de alimentação semi-modular com certificação 80 Plus Bronze.', 'https://http2.mlstatic.com/D_NQ_NP_739456-MLA40423589214_012020-O.webp'),
('GTX 1660 Super', 'PlacasdeVideo', 190, 'super placa de video', 'https://c1.neweggimages.com/ProductImage/AUYWS210614SSspG.jpg'),
('Fonte de Alimentação EVGA SuperNOVA 750W', 'Fontes', 129.99, 'Fonte de alimentação modular de alta eficiência energética.', 'fonte_alimentacao_750w.jpg'),
('Placa-mãe MSI B450 TOMAHAWK MAX', 'PlacaMae', 129.99, 'Placa-mãe com suporte a processadores AMD e recursos avançados.', 'placa_mae_b450_tomahawk.jpg'),
('Placa-mãe ASUS Prime Z590-A', 'PlacaMae', 279.99, 'Placa-mãe de alta qualidade com suporte a processadores Intel.', 'placa_mae_prime_z590a.jpg'),
('Gabinete NZXT H510', 'Gabinetes', 99.99, 'Gabinete compacto com design elegante e bom fluxo de ar.', 'gabinete_nzxt_h510.jpg'),
('Gabinete Cooler Master MasterBox MB511', 'Gabinetes', 79.99, 'Gabinete espaçoso com painel lateral de vidro temperado.', 'gabinete_cooler_master_mb511.jpg'),
('RTX 3060 ti', 'PlacasdeVideo', 300, 'placa top das galaxias custo beneficio', 'https://images.kabum.com.br/produtos/fotos/432715/placa-de-video-rtx-3060-ti-dual-oc-asus-nvidia-geforce-8-gb-gddr6x-dlss-ray-tracing-dual-rtx3060ti-o8gd6x_1678193263_g.jpg'),
('Placa Mae B550M Aorus Elite', 'PlacaMae', 180, 'placa mae dos deuses', 'https://m.media-amazon.com/images/I/61cwKDO98rS.jpg'),
('Processador Intel Core i7', 'Processadores', 499.99, 'Processador de última geração para alto desempenho em PCs.', 'https://images.kabum.com.br/produtos/fotos/112996/processador-intel-core-i7-10700k-cache-16mb-3-8ghz-lga-1200-bx8070110700k_1589208569_g.jpg'),
('Placa de Vídeo NVIDIA GeForce GTX 1080', 'PlacasdeVideo', 799.99, 'Placa de vídeo poderosa para jogos e renderização.', 'https://i.zst.com.br/thumbs/12/17/2e/186284218.jpg'),
('Fonte de Alimentação EVGA 650W', 'Fontes', 89.99, 'Fonte de alimentação eficiente e estável para suprir a demanda de energia.', 'https://m.media-amazon.com/images/I/71rmFlBQL9L._AC_SY450_.jpg'),
('Placa-mãe ASUS ROG Strix Z390', 'PlacaMae', 279.99, 'Placa-mãe de alta qualidade com recursos avançados para overclock.', 'https://http2.mlstatic.com/D_NQ_NP_784412-MLB31072892223_062019-O.jpg'),
('Gabinete Cooler Master MasterCase', 'Gabinetes', 119.99, 'Gabinete espaçoso e modular para fácil montagem e gerenciamento de cabos.', 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/4/_/4_1_11.jpg'),
('Processador AMD Ryzen 7', 'Processadores', 399.99, 'Processador de alto desempenho com múltiplos núcleos.', 'https://images.kabum.com.br/produtos/fotos/129459/processador-amd-ryzen-9-5900x-cache-70mb-3-7ghz-4-8ghz-max-turbo-am4-100-100000063wof_1602600708_g.jpg'),
('Processador Intel Core i5', 'Processadores', 249.99, 'Processador intermediário para tarefas diárias e jogos.', 'https://images.kabum.com.br/produtos/fotos/112990/processador-intel-core-i5-10400-cache-12mb-2-9ghz-lga-1200-bx8070110400_1589200168_g.jpg'),
('Placa de Vídeo AMD Radeon RX 580', 'PlacasdeVideo', 299.99, 'Placa de vídeo para jogos em alta qualidade gráfica.', 'https://m.media-amazon.com/images/I/61CxrI8SYSL.jpg'),
('Placa de Vídeo NVIDIA GeForce RTX 3070', 'PlacasdeVideo', 999.99, 'Placa de vídeo de última geração para jogos e edição de vídeo.', 'https://p.turbosquid.com/ts-thumb/hH/QACerT/8ypMVKIW/nvidia_geforce_rtx_3070_founders_edition_360/jpg/1604115498/600x600/turn_fit_q87/0a29207262a5397154d171bd04aa64af2347d85a/nvidia_geforce_rtx_3070_founders_edition_360-1.jpg'),
('Memória RAM Kingston HyperX 8GB', 'RAM', 79.99, 'Módulo de memória RAM de média capacidade para PCs.', 'https://m.media-amazon.com/images/I/71GNdqfHv7L._AC_UF894,1000_QL80_.jpg'),
('Memória RAM G.SKILL Trident Z RGB 32GB', 'RAM', 349.99, 'Módulo de memória RAM de alta capacidade e iluminação RGB.', 'https://images.kabum.com.br/produtos/fotos/104910/memoria-g-skill-trident-z-rgb-32gb-2x16gb-3200mhz-ddr4-cl16-f4-3200c16d-32gtzr_memoria-g-skill-trident-z-rgb-32gb-2x16gb-3200mhz-ddr4-cl16-f4-3200c16d-32gtzr_1570020234_original.jpg'),
('Memória RAM XPG 8GB DDR4', 'RAM', 29.99, 'Módulo de memória RAM de média capacidade para PCs.', 'https://images.kabum.com.br/produtos/fotos/194492/memoria-xpg-spectrix-d45g-rgb-8gb-3600mhz-ddr4-cl18-preta-ax4u36008g18i-cbkd45g_1632507273_original.jpg'),
('HDD Seagate Barracuda 2TB', 'Armazenamento', 89.99, 'Disco rígido de alta capacidade para armazenamento de dados.', 'https://images.kabum.com.br/produtos/fotos/100916/hd-seagate-barracuda-2tb-3-5-sata-st2000dm008_1552932728_g.jpg');

INSERT INTO categories (category) VALUES ('Processadores');
INSERT INTO categories (category) VALUES ('PlacasdeVideo');
INSERT INTO categories (category) VALUES ('RAM');
INSERT INTO categories (category) VALUES ('Armazenamento');
INSERT INTO categories (category) VALUES ('Fontes');
INSERT INTO categories (category) VALUES ('Gabinetes');
INSERT INTO categories (category) VALUES ('PlacaMae');
