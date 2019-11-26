require 'test_helper'

class AuthorizeCodesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @authorize_code = authorize_codes(:one)
  end

  test "should get index" do
    get authorize_codes_url, as: :json
    assert_response :success
  end

  test "should create authorize_code" do
    assert_difference('AuthorizeCode.count') do
      post authorize_codes_url, params: { authorize_code: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show authorize_code" do
    get authorize_code_url(@authorize_code), as: :json
    assert_response :success
  end

  test "should update authorize_code" do
    patch authorize_code_url(@authorize_code), params: { authorize_code: {  } }, as: :json
    assert_response 200
  end

  test "should destroy authorize_code" do
    assert_difference('AuthorizeCode.count', -1) do
      delete authorize_code_url(@authorize_code), as: :json
    end

    assert_response 204
  end
end
