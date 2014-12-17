<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RebuildEmailsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('emails', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('to');
			$table->string('email');
			$table->timestamps();
		});

		Schema::table('emails', function(Blueprint $table)
		{
			$table->foreign('to')->references('account')->on('users')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('emails');
	}

}
