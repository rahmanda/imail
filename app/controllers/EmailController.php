<?php

class EmailController extends \BaseController {

	public function __construct(Email $emails) {
		$this->emails = $emails;
	}

	public function getByUser() {
		$user = $this->me();
		return Response::json($this->emails->byUser($this->me())->orderBy('created_at', 'desc')->get(), 200);
	}

	public function getById($emailId) {
		return Response::json($this->emails->byId($emailId)->first(), 200);
	}

	public function sendEmail() {
		$email = $this->emails->newInstance(Input::all());
		$email->user()->associate($this->me());
		$email->save();

		return Response::json($email, 200);
	}

	public function getUpdates($lastEmailId) {
		return Response::json($this->emails->byUser($this->me())->afterId($lastEmailId)->get(), 200);
	}

}