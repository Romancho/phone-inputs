<?php require_once('less_compiller.php');?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
    <title>Wifi</title>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
    <link type="text/css" rel="stylesheet" href="css_cache/<?=$css_file_name?>"/>
</head>
<body class="theme-1">
	<main>
        <header class="header">
            <div class="container">
                <div class="lang">
                    <span class="lang__item en active">En</span>
                    <span class="lang__item ru">Ru</span>
                </div>
            </div>
        </header>
		<div class="container">
			<form id="authForm" class="auth-form">
				<a href="/" class="logo logo-main"><?php include('logo.php');?></a>
				<p class="form-caption">Войдите через социальную сеть или по номеру телефона</p>
				<div class="social-btn">
	                <a target="_blank" href="#" class="btn btn-icon" rel="tooltip" title="Facebook">
	                    <i class="fab fa-facebook-square fa-2x"></i>
	                </a>
	                <a target="_blank" href="#" class="btn btn-icon" rel="tooltip" title="ВКонтакте">
	                    <i class="fab fa-vk fa-2x"></i>
	                </a>
	                <a target="_blank" href="#" class="btn btn-icon" rel="tooltip" title="Twitter">
	                    <i class="fab fa-twitter fa-2x"></i>
	                </a>
	                <a target="_blank" href="#" class="btn btn-icon" rel="tooltip" title="Instagram">
	                    <i class="fab fa-instagram fa-2x"></i>
	                </a>
	            </div>
	            <div class="form-inputs">
	            	<i class="fas fa-phone"></i>
					<p>
						<input type="text" id="customer_phone" class="form-control" placeholder="Номер телефона" required>
						<button type="submit" href="#pablo" class="btn btn-submit" disabled><i class="fas fa-arrow-right"></i></button>

					</p>
                    <input type="checkbox" id="phone_mask" checked>
                    <label id="descr" for="phone_mask">Маска ввода</label>
					
				</div>
			</form>
		</div>
		<footer class="footer">
            <div class="container">
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                Условия оферты
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="copyright">
                    <a href="http://enslave.ru">Enslave Wi-Fi</a>
                </div>
            </div>
        </footer>
	</main>
</body>
<script type="text/javascript" src="/js/jquery-3.2.1.min.js"></script>
<script defer src="https://use.fontawesome.com/releases/v5.0.2/js/all.js"></script>
<script type="text/javascript" src="/js/jquery.inputmask.js"></script>
<script type="text/javascript" src="/js/mask/js/jquery.inputmask-multi.min.js"></script>
<script type="text/javascript" src="/js/init.js?ver5"></script>
</html>