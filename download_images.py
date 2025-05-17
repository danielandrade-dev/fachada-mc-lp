import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urljoin

def download_images():
    # URL do site
    url = 'https://fachadasmc.com.br/'
    
    # Criar diretório se não existir
    os.makedirs('public/servicos', exist_ok=True)
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    }
    try:
        # Fazer requisição para o site
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        
        # Parsear o HTML
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Encontrar todas as imagens
        images = soup.find_all('img')
        
        # Baixar cada imagem
        for i, img in enumerate(images):
            if img.get('src'):
                img_url = urljoin(url, img['src'])
                try:
                    img_response = requests.get(img_url, headers=headers)
                    img_response.raise_for_status()
                    
                    # Salvar a imagem
                    filename = f'public/servicos/image_{i+1}.jpg'
                    with open(filename, 'wb') as f:
                        f.write(img_response.content)
                    print(f'Imagem baixada: {filename}')
                except Exception as e:
                    print(f'Erro ao baixar imagem {img_url}: {str(e)}')
                    
    except Exception as e:
        print(f'Erro ao acessar o site: {str(e)}')

if __name__ == '__main__':
    download_images() 