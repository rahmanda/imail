<?php

class UserController extends \BaseController {

	public function __construct(User $user) {
		$this->users = $user;
	}

	public function login() {
		if(Auth::attempt(array('account' => Input::get('account'), 'password' => Input::get('password')))) {
			return Response::json(Auth::user(), 200);
		} else {
			return Response::json('Invalid credentials', 400);
		}
	}

	public function logout() {
		if(Auth::logout()) {
			return Response::json('Logout success', 200);
		} else {
			return Response::json('Logout failed', 400);
		}
	}
}